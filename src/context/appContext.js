import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const navigate = useNavigate(); 
    const [properties, setProperties] = useState([]);
    const [selectedPropertDetail, setSelectedPropertDetail] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

   // Fetch Data from API
   useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          "https://mira-strapi-dev.q.starberry.com/api/properties/?_limit=50"
        );
        const data = response.data.data;
        setProperties(data); // Ensure the API response matches expected structure
        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // For login validation
    const validEmail = "admin@test.com";
    const validPassword = "password123";
    const handleLogin = () => {
        if (!email.trim()) {
            setError("Email is required");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Enter a valid email");
            return;
        }
        if (!password.trim()) {
            setError("Password is required");
            return;
        }
        if (email === validEmail && password === validPassword) {
            navigate("/property");
        } else {
            setError("Invalid credentials!");
        }
    };
    
   //navigating to detailed page
  const handleClickCards = (id) => {
    console.log(id);
    navigate(`/detailedPage/${id}`);
    const details = properties.find((property) => property.attributes.crm_id === id);
    console.log(details,"details",properties);
    setSelectedPropertDetail(details);
  };
    return (
        <AppContext.Provider value={{ 
            properties, 
            setProperties,
            handleLogin,
            error,
            email,
            password,
            setPassword,
            setEmail,
            loading,
            handleClickCards,
            selectedPropertDetail,
            setSelectedPropertDetail  
            }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
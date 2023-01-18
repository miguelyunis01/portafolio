import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  useMediaQuery 
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import emailjs from '@emailjs/browser'

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit(); 
 const { onOpen } = useAlertContext(); 
 const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
 
 const formik = useFormik({ 
   initialValues: { 
     firstName: "", 
     email: "", 
     type: "hireMe", 
     comment: "", 
   }, 
   onSubmit: (values, {resetForm}) => { 
    const form = document.querySelector("#formId");
     emailjs.sendForm('service_tjr9psy', 'template_z3zh739', form, '-2Mt_tRKBDNapAHVg')
     .then((response) => {
      if (response.status === 200) {
          onOpen('success', 'Email sent successfully');
          resetForm();
      } else {
          onOpen('error', 'Error sending email');
      }
  }); 
   }, 
   validationSchema: Yup.object({ 
     firstName: Yup.string().required("Required"), 
     email: Yup.string().email("Invalid email address").required("Required"), 
     comment: Yup.string() 
       .min(25, "Must be at least 25 characters") 
       .required("Required"), 
   }), 
 }); 
 
 useEffect(() => { 
   if (response) { 
     onOpen(response.type, response.message); 
     if (response.type === 'success') { 
       formik.resetForm(); 
     } 
   } 
 }, [response]); 
 
 return ( 
   <FullScreenSection 
     isDarkBackground 
     backgroundColor="#512DA8" 
     alignItems="flex-start"
     width={isLargerThan600 ?  "100%" : "100%" }
     py={16} 
     spacing={8} 
   > 
     <VStack w="1024px" p={32} alignItems="center"width={isLargerThan600 ?  "100%" : "100% "} padding={isLargerThan600 ?  "30" :" auto "}> 
       <Heading as="h1" id="contactme-section" textAlign={isLargerThan600 ?  "center" : "center"} > 
         Contact me 
       </Heading> 
       <Box p={6} rounded="md" width={isLargerThan600 ?  "100%" : "100% "} > 
         <form id="formId" onSubmit={formik.handleSubmit}> 
           <VStack spacing={4}> 
             <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}> 
               <FormLabel htmlFor="firstName">Name</FormLabel> 
               <Input 
                 id="firstName" 
                 name="firstName" 
                 {...formik.getFieldProps("firstName")} 
               /> 
               <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage> 
             </FormControl> 
             <FormControl isInvalid={!!formik.errors.email && formik.touched.email}> 
               <FormLabel htmlFor="email">Email Address</FormLabel> 
               <Input 
                 id="email" 
                 name="email" 
                 type="email" 
                 {...formik.getFieldProps("email")} 
               /> 
               <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
             </FormControl> 
             <FormControl> 
               <FormLabel htmlFor="type">Type of enquiry</FormLabel> 
               <Select id="type" name="type" backgroundColor="" color="#CECECE " {...formik.getFieldProps("type")}> 
                 <option value="hireMe">Freelance project proposal</option> 
                 <option value="openSource"> 
                   Open source consultancy session 
                 </option> 
                 <option value="other">Other</option> 
               </Select> 
             </FormControl> 
             <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}> 
               <FormLabel htmlFor="comment">Your message</FormLabel> 
               <Textarea 
                 id="comment" 
                 name="comment" 
                 height={250} 
                 {...formik.getFieldProps("comment")} 
               /> 
               <FormErrorMessage>{formik.errors.comment}</FormErrorMessage> 
             </FormControl> 
             <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}> 
               Submit 
             </Button> 
           </VStack> 
         </form> 
       </Box> 
     </VStack> 
   </FullScreenSection> 
 ); 
}; 

export default LandingSection;

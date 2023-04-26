import React ,{useState} from 'react'
 import { Field, Form, Formik } from 'formik';
 import Home from "./Home"
 import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Box,
    Input,
    Button,
    Center,
    Heading
  } from '@chakra-ui/react'

function Formk() {
    const [text,setText]=useState(true)

    function validateName(value) {
      let error
      if (!value) {
        error = 'Name is required'
      } else if (value.toLowerCase() !== 'naruto') {
        error = "Jeez! You're not a fan 😱"
      }
      return error
    }
const onSubmit=async(val,{resetform})=>{
try{
    const a=await fetch('/api/data',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(val),
    })
    if(a.ok)
    {
setText(false)
    }
    resetform()
}
catch(err){
    console.log(err)
}
}
    return (
<>
<Home></Home>
        <Center>
        <Box width={500}>
      <Formik
        initialValues={{Fname:'',Lname:'',phno:'',Fathername:'' ,Mothername:'',email:'',DOB:''}}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
            <Heading width={1000}
            mb='5'
            mt='5'>STUDENT REGISTRATION FORM</Heading>
            <Field name='Fname' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>First name</FormLabel>
                  <Input {...field} placeholder='Firstname' />
                  <FormErrorMessage>{form.errors.Fname}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='Lname' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Last name</FormLabel>
                  <Input {...field} placeholder='Lastname' />
                  <FormErrorMessage>{form.errors.Lname}</FormErrorMessage>
                </FormControl>
              )}
            </Field> 
            <Field name='Fathername' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Father name</FormLabel>
                  <Input {...field} placeholder='Fathername' />
                  <FormErrorMessage>{form.errors.Fathername}</FormErrorMessage>
                </FormControl>
              )}
            </Field> 
            <Field name='Mothername' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Mother name</FormLabel>
                  <Input {...field} placeholder='Mothername' />
                  <FormErrorMessage>{form.errors.Mothername}</FormErrorMessage>
                </FormControl>
              )}
            </Field> 
              <Field name='phno' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>phoneno.</FormLabel>
                  <Input {...field} placeholder='Mobile no' />
                  <FormErrorMessage>{form.errors.phno}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='email' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>email</FormLabel>
                  <Input {...field} placeholder='Email' />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
                 )}
            </Field>
            <Field name='DOB' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Date of birth</FormLabel>
                  <Input {...field} placeholder='Date of birth' />
                  <FormErrorMessage>{form.errors.DOB}</FormErrorMessage>
                </FormControl>
                 )}
            </Field>
            <Button width={500}
              mt={4}
              colorScheme='teal'
              isLoading={props.isSubmitting}
              type='submit'
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      </Box>
      </Center>
      </>
    )
  }
  export default Formk

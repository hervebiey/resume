'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import {SimpleLayout} from '@/components/SimpleLayout'
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as yup from 'yup';

const formValidationSchema = yup.object().shape({
	name: yup.string().required('Name is required'),
	email: yup.string().email('Invalid email').required('Email is required'),
	message: yup.string().required('Message is required'),
	honeypot: yup.string().max(0),
});

interface FormData {
	name: string;
	email: string;
	message: string;
	honeypot: string;
}

export default function Contact() {
	return (
		<SimpleLayout
			title="Let's Connect!"
			intro="Whether you have a project in mind, need an expert opinion, or just want to share your thoughts,
			I'm here to listen. Drop me a line, and let's start a conversation that could lead to great things."
		>
			<Formik
				initialValues={{
					name: '',
					email: '',
					message: '',
					honeypot: ''
				}}
				validationSchema={formValidationSchema}
				onSubmit={async (values, { setSubmitting, resetForm }) => {
					if (values.honeypot) {
						return;
					}
					
					try {
						const response= await fetch('YOUR_ENDPOINT_URL', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(values),
						});
						
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						
						// Handle success - e.g., showing a success message
						// You can also reset the form here if needed
						resetForm();
					} catch (error) {
						// Handle errors - e.g., showing an error message to the user
						console.error('There was a problem with your submission:', error);
					} finally {
						setSubmitting(false);
					}
				}}
			>
				{({isSubmitting}) => (
					<Form className="space-y-12 sm:space-y-16">
						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div
								className="col-span-full rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
								<label htmlFor="name" className="block text-xs font-medium">Full Name</label>
								<Field name="name"
								       id="name"
								       type="text"
									// TODO: IMH-2: Add dark mode support
									   className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"/>
								<ErrorMessage name="name" component="div"/>
							</div>
							<div
								className="col-span-full rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
								<label htmlFor="email" className="block text-xs font-medium">Email Address</label>
								<Field name="email"
								       id="email"
								       type="email"
									// TODO: IMH-2: Add dark mode support
									   className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"/>
								<ErrorMessage name="email" component="div"/>
							</div>
							<div
								className="col-span-full rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
								<label htmlFor="message" className="block text-xs font-medium">Message</label>
								<textarea rows={4}
								          name="message"
								          id="message"
									// TODO: IMH-2: Add dark mode support
									      className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"/>
								<ErrorMessage name="message" component="div"/>
							</div>
							
							<Field name="honeypot" type="text" style={{display: 'none'}}/>
							
							<div className="col-span-full mt-6 flex items-center justify-end gap-x-6">
								<button type="button" className="text-sm font-semibold leading-6">Cancel</button>
								<button type="submit" disabled={isSubmitting}
								        className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
									Submit
								</button>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</SimpleLayout>
	)
}
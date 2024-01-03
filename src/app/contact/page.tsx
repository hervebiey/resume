'use client';

import React from 'react';
import {useTheme} from 'next-themes';
import {SimpleLayout} from '@/components/SimpleLayout';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as yup from 'yup';
import emailjs from 'emailjs-com';

const formValidationSchema = yup.object().shape({
	name: yup.string().required('The name is required'),
	email: yup.string().email('Invalid email').required('The email is required'),
	// message: yup.string().required('The message is required'),
	honeypot: yup.string().max(0),
});

export default function Contact() {
	const {theme} = useTheme();
	
	const sendEmail = async ({values}: { values: any }) => {
		try {
			emailjs.init("3e8sAWWG9OFnZ4wge");
			
			const templateParams = {
				from_name: values.name,
				from_email: values.email,
				message: values.message,
				subject: "Message from hervebiey.com from " + values.name,
			};
			
			await emailjs.send('service_w9hpwce', 'template_x1r33wx', templateParams);
			
			alert('Message sent successfully!');
		} catch (error) {
			console.error('Failed to send email. Error:', error);
			alert('Failed to send message. Please try again later.');
		}
	}
	
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
				onSubmit={async (values, {setSubmitting, resetForm}) => {
					if (values.honeypot) {
						return;
					}
					
					await sendEmail({values: {values: values}});
					
					setSubmitting(false);
					resetForm();
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
								       className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 dark:text-zinc-200 dark:placeholder:text-zinc-300 dark:bg-zinc-900 focus:ring-0 sm:text-sm sm:leading-6"/>
								<ErrorMessage name="name" component="div"/>
							</div>
							<div
								className="col-span-full rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
								<label htmlFor="email" className="block text-xs font-medium">Email Address</label>
								<Field name="email"
								       id="email"
								       type="email"
								       className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 dark:text-zinc-200 dark:placeholder:text-zinc-300 dark:bg-zinc-900 focus:ring-0 sm:text-sm sm:leading-6"/>
								<ErrorMessage name="email" component="div"/>
							</div>
							<div
								className="col-span-full rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
								<label htmlFor="message" className="block text-xs font-medium">Message</label>
								<textarea rows={4}
								          name="message"
								          id="message"
								          className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 dark:text-zinc-200 dark:placeholder:text-zinc-300 dark:bg-zinc-900 focus:ring-0 sm:text-sm sm:leading-6"/>
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
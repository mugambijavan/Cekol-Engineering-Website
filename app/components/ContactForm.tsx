'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Replace with actual API call
      console.log('Form submitted:', data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-gray-700 mb-2">Name</label>
        <input
          {...register('name', { required: true })}
          className="w-full p-3 border rounded-lg"
        />
        {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          {...register('email', { 
            required: true,
            pattern: /^\S+@\S+$/i
          })}
          className="w-full p-3 border rounded-lg"
        />
        {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Message</label>
        <textarea
          {...register('message', { required: true })}
          className="w-full p-3 border rounded-lg h-32"
        />
        {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitSuccess && (
        <p className="text-green-600 text-center mt-4">
          Message sent successfully!
        </p>
      )}
    </form>
  );
}
import React, { useState } from 'react';
import Button from './Button';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;
    
    // Validate name
    if (!formValues.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
    
    // Validate email
    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }
    
    // Validate message
    if (!formValues.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    } else if (formValues.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after successful submit
        setFormValues({
          name: '',
          email: '',
          message: ''
        });
        
        // Reset success message after a delay
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
            formErrors.name
              ? 'border-alert-500 focus:ring-alert-200'
              : 'border-neutral-300 focus:ring-primary-200 focus:border-primary-500'
          }`}
          placeholder="Your name"
        />
        {formErrors.name && (
          <p className="mt-1 text-sm text-alert-500">{formErrors.name}</p>
        )}
      </div>
      
      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
            formErrors.email
              ? 'border-alert-500 focus:ring-alert-200'
              : 'border-neutral-300 focus:ring-primary-200 focus:border-primary-500'
          }`}
          placeholder="your.email@example.com"
        />
        {formErrors.email && (
          <p className="mt-1 text-sm text-alert-500">{formErrors.email}</p>
        )}
      </div>
      
      {/* Message Textarea */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
            formErrors.message
              ? 'border-alert-500 focus:ring-alert-200'
              : 'border-neutral-300 focus:ring-primary-200 focus:border-primary-500'
          }`}
          placeholder="Your message"
        />
        {formErrors.message && (
          <p className="mt-1 text-sm text-alert-500">{formErrors.message}</p>
        )}
      </div>
      
      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        
        {/* Success Message */}
        {submitSuccess && (
          <p className="mt-3 text-primary-600 animate-fade-in">
            Your message has been sent! We'll get back to you soon.
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
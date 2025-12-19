import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InquiryFormData, UnitType } from '../types';
import { Send, Loader2 } from 'lucide-react';

interface InquiryFormProps {
  onClose: () => void;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<InquiryFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit: SubmitHandler<InquiryFormData> = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form Submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send size={32} />
        </div>
        <h3 className="text-2xl font-serif text-emerald-950 mb-2">You're on the list!</h3>
        <p className="text-gray-600 mb-6">Thank you for your interest in Enggrass Lofts. A leasing agent will be in touch shortly with your exclusive details.</p>
        <button 
          onClick={onClose}
          className="bg-emerald-950 text-white px-6 py-2 rounded uppercase tracking-widest text-sm hover:bg-emerald-800 font-bold"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="bg-copper-50 border-l-4 border-copper-400 p-4 mb-6">
        <p className="text-emerald-950 text-sm font-medium">
          <span className="font-bold text-copper-600">VIP Incentive:</span> Join now for exclusive hard-hat tour invitations and "First Month Free" offers.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1 font-bold">Full Name</label>
            <input 
              {...register("name", { required: true })}
              className="w-full border-b-2 border-gray-200 bg-gray-50 p-2 focus:border-copper-400 focus:outline-none transition-colors"
              placeholder="Jane Doe"
            />
            {errors.name && <span className="text-red-500 text-xs">Name is required</span>}
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1 font-bold">Email</label>
            <input 
              type="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              className="w-full border-b-2 border-gray-200 bg-gray-50 p-2 focus:border-copper-400 focus:outline-none transition-colors"
              placeholder="jane@example.com"
            />
            {errors.email && <span className="text-red-500 text-xs">Valid email required</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1 font-bold">Phone</label>
            <input 
              type="tel"
              {...register("phone", { required: true })}
              className="w-full border-b-2 border-gray-200 bg-gray-50 p-2 focus:border-copper-400 focus:outline-none transition-colors"
              placeholder="(248) 555-0199"
            />
            {errors.phone && <span className="text-red-500 text-xs">Phone is required</span>}
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1 font-bold">Desired Move-In</label>
            <input 
              type="date"
              {...register("moveInDate", { required: true })}
              className="w-full border-b-2 border-gray-200 bg-gray-50 p-2 focus:border-copper-400 focus:outline-none transition-colors text-gray-700"
            />
            {errors.moveInDate && <span className="text-red-500 text-xs">Date is required</span>}
          </div>
        </div>

        <div className="pt-2">
           <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-bold">Interested In (Select all that apply)</label>
           <div className="grid grid-cols-2 gap-2">
             {Object.values(UnitType).map((type) => (
               <label key={type} className="flex items-center space-x-2 cursor-pointer p-2 border border-gray-200 rounded hover:bg-copper-50 transition-colors">
                 <input 
                   type="checkbox" 
                   value={type} 
                   {...register("unitTypes")}
                   className="accent-emerald-950 w-4 h-4"
                 />
                 <span className="text-sm text-gray-700 font-medium">{type}</span>
               </label>
             ))}
           </div>
        </div>

        <div>
           <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1 font-bold">Price Range</label>
           <select 
            {...register("priceRange")}
            className="w-full border-b-2 border-gray-200 bg-gray-50 p-2 focus:border-copper-400 focus:outline-none transition-colors text-gray-700"
           >
             <option value="">Select a range...</option>
             <option value="$1200-$1500">$1,200 - $1,500</option>
             <option value="$1500-$2000">$1,500 - $2,000</option>
             <option value="$2000+">$2,000+</option>
           </select>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-copper-400 text-emerald-950 py-4 mt-4 uppercase tracking-widest font-bold hover:bg-copper-100 transition-colors flex items-center justify-center gap-2 shadow-lg"
        >
          {isSubmitting ? <><Loader2 className="animate-spin" size={20}/> Processing</> : 'Join Priority List'}
        </button>
      </form>
    </div>
  );
};
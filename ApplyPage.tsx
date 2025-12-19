
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ShieldCheck, Calendar, CreditCard, User, Mail, Phone, Home } from 'lucide-react';

export const ApplyPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    console.log("Application Data:", data);
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-20 bg-emerald-950 min-h-screen text-center flex items-center justify-center">
        <div className="max-w-lg px-6">
          <ShieldCheck className="text-copper-400 w-20 h-20 mx-auto mb-8 animate-pulse" />
          <h1 className="font-serif text-5xl text-white mb-6">Application Received</h1>
          <p className="text-emerald-100/70 text-lg mb-8 leading-relaxed">
            Thank you for your interest in Enggrass Lofts. Your priority status has been secured. A leasing specialist will contact you within 24 hours to schedule a hard-hat tour.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-10 py-4 bg-copper-400 text-emerald-950 uppercase tracking-widest font-bold hover:bg-white transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-copper-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-copper-600 uppercase tracking-widest font-bold text-sm mb-4">Pre-Lease Opportunity</h2>
            <h1 className="font-serif text-5xl md:text-6xl text-emerald-950 mb-4">Priority Application</h1>
            <p className="text-gray-600">Secure your position on our waitlist for Pontiac's premier luxury lofts.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 space-y-12">
              
              {/* Personal Info */}
              <section>
                <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
                   <User className="text-copper-600" />
                   <h3 className="font-serif text-2xl text-emerald-950">Personal Details</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                    <input {...register('name', { required: true })} className="w-full border-b-2 border-gray-100 p-3 focus:border-copper-400 outline-none transition-colors" placeholder="Alexander Sterling" />
                    {errors.name && <span className="text-red-500 text-[10px] uppercase font-bold">Required</span>}
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                    <input type="email" {...register('email', { required: true })} className="w-full border-b-2 border-gray-100 p-3 focus:border-copper-400 outline-none transition-colors" placeholder="alex@sterling.com" />
                    {errors.email && <span className="text-red-500 text-[10px] uppercase font-bold">Valid email required</span>}
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Phone Number</label>
                    <input type="tel" {...register('phone', { required: true })} className="w-full border-b-2 border-gray-100 p-3 focus:border-copper-400 outline-none transition-colors" placeholder="(248) 555-0100" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Current City</label>
                    <input {...register('city')} className="w-full border-b-2 border-gray-100 p-3 focus:border-copper-400 outline-none transition-colors" placeholder="Royal Oak, MI" />
                  </div>
                </div>
              </section>

              {/* Preferences */}
              <section>
                <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
                   <Home className="text-copper-600" />
                   <h3 className="font-serif text-2xl text-emerald-950">Loft Preferences</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 block mb-4">Floor Plan Category</label>
                    <div className="grid grid-cols-1 gap-2">
                       {['Studio', 'One Bedroom', 'Two Bedroom', 'Live/Work'].map(type => (
                         <label key={type} className="flex items-center gap-3 p-3 border border-gray-100 rounded hover:bg-copper-50 cursor-pointer transition-colors">
                           <input type="radio" value={type} {...register('unitType')} className="accent-copper-600" />
                           <span className="text-sm font-medium text-emerald-950">{type}</span>
                         </label>
                       ))}
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 flex items-center gap-2"><Calendar size={12} /> Desired Move-In Date</label>
                      <input type="date" {...register('date', { required: true })} className="w-full border-b-2 border-gray-100 p-3 focus:border-copper-400 outline-none transition-colors" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 flex items-center gap-2"><CreditCard size={12} /> Budget Range</label>
                      <select {...register('budget')} className="w-full border-b-2 border-gray-100 p-3 focus:border-copper-400 outline-none transition-colors bg-white">
                        <option value="1500-2000">$1,500 - $2,000</option>
                        <option value="2000-2500">$2,000 - $2,500</option>
                        <option value="2500+">$2,500+</option>
                      </select>
                    </div>
                  </div>
                </div>
              </section>

              <div className="pt-8">
                <button 
                  type="submit" 
                  className="w-full bg-emerald-950 text-white py-6 uppercase tracking-[0.3em] font-bold hover:bg-emerald-900 transition-colors shadow-2xl flex items-center justify-center gap-3 group"
                >
                  Submit Priority Application
                  <ShieldCheck className="group-hover:text-copper-400 transition-colors" />
                </button>
                <p className="text-[10px] text-center mt-4 text-gray-400 uppercase tracking-widest">By submitting, you agree to receive communications regarding Enggrass Lofts.</p>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

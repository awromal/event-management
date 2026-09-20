"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Loader2, ChevronDown, Check } from 'lucide-react';

// Country list with dial code, expected digit length, and example format
const countries = [
  { code: 'IN', name: 'India', dial: '+91', digits: 10, example: '98765 43210' },
  { code: 'US', name: 'United States', dial: '+1', digits: 10, example: '(555) 123-4567' },
  { code: 'GB', name: 'United Kingdom', dial: '+44', digits: 10, example: '7911 123456' },
  { code: 'CA', name: 'Canada', dial: '+1', digits: 10, example: '(555) 123-4567' },
  { code: 'AU', name: 'Australia', dial: '+61', digits: 9, example: '412 345 678' },
  { code: 'DE', name: 'Germany', dial: '+49', digits: 11, example: '151 23456789' },
  { code: 'FR', name: 'France', dial: '+33', digits: 9, example: '6 12 34 56 78' },
  { code: 'JP', name: 'Japan', dial: '+81', digits: 10, example: '90 1234 5678' },
  { code: 'CN', name: 'China', dial: '+86', digits: 11, example: '131 2345 6789' },
  { code: 'BR', name: 'Brazil', dial: '+55', digits: 11, example: '11 91234 5678' },
  { code: 'AE', name: 'UAE', dial: '+971', digits: 9, example: '50 123 4567' },
  { code: 'SG', name: 'Singapore', dial: '+65', digits: 8, example: '9123 4567' },
  { code: 'ZA', name: 'South Africa', dial: '+27', digits: 9, example: '71 123 4567' },
  { code: 'MX', name: 'Mexico', dial: '+52', digits: 10, example: '55 1234 5678' },
  { code: 'KR', name: 'South Korea', dial: '+82', digits: 10, example: '10 1234 5678' },
  { code: 'IT', name: 'Italy', dial: '+39', digits: 10, example: '312 345 6789' },
  { code: 'ES', name: 'Spain', dial: '+34', digits: 9, example: '612 34 56 78' },
  { code: 'NL', name: 'Netherlands', dial: '+31', digits: 9, example: '6 12345678' },
  { code: 'SA', name: 'Saudi Arabia', dial: '+966', digits: 9, example: '51 234 5678' },
  { code: 'NG', name: 'Nigeria', dial: '+234', digits: 10, example: '802 123 4567' },
];

function CountryFlag({ code, size = 'text-base sm:text-lg' }: { code: string; size?: string }) {
  const codePoints = code
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  const flag = String.fromCodePoint(...codePoints);
  return <span className={size} role="img" aria-label={code}>{flag}</span>;
}

interface BookingFormProps {
  defaultEventType?: string;
}

export default function BookingForm({ defaultEventType }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [eventType, setEventType] = useState(defaultEventType || '');

  // Form fields
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('IN');
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Validation errors
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // Touched state
  const [emailTouched, setEmailTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);

  useEffect(() => {
    if (defaultEventType) {
      setEventType(defaultEventType);
    }
  }, [defaultEventType]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsCountryOpen(false);
        setCountrySearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedCountry = countries.find((c) => c.code === countryCode) || countries[0];

  const filteredCountries = countrySearch
    ? countries.filter(
        (c) =>
          c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
          c.dial.includes(countrySearch) ||
          c.code.toLowerCase().includes(countrySearch.toLowerCase())
      )
    : countries;

  // Validate email
  const validateEmail = (value: string) => {
    if (!value) return 'Email is required';
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) return 'Please enter a valid email (e.g. name@domain.com)';
    return '';
  };

  // Validate phone
  const validatePhone = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '');
    if (!digitsOnly) return '';
    if (digitsOnly.length < selectedCountry.digits) {
      return `Enter ${selectedCountry.digits} digits (${digitsOnly.length}/${selectedCountry.digits})`;
    }
    return '';
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (emailTouched) setEmailError(validateEmail(value));
  };

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '');
    const limited = digitsOnly.slice(0, selectedCountry.digits);
    setPhone(limited);
    if (phoneTouched) setPhoneError(validatePhone(limited));
  };

  useEffect(() => {
    const limited = phone.slice(0, selectedCountry.digits);
    setPhone(limited);
    if (phoneTouched) setPhoneError(validatePhone(limited));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailErr = validateEmail(email);
    const phoneErr = validatePhone(phone);
    setEmailError(emailErr);
    setPhoneError(phoneErr);
    setEmailTouched(true);
    setPhoneTouched(true);
    if (emailErr || phoneErr) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const inputBase = "w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg border outline-none transition-all duration-200 bg-background";
  const inputValid = "border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/20";
  const inputError = "border-red-400 bg-red-50/30 focus:ring-2 focus:ring-red-300 focus:border-red-400";

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background relative">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary">
            Start Your Inquiry
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-foreground/80">
            Let us know the details of your event, and we&apos;ll get back to you with a custom quote.
          </p>
        </div>

        <div className="bg-card p-5 sm:p-8 md:p-10 rounded-2xl shadow-sm border border-primary/20">
          {isSubmitted ? (
            <div className="text-center py-10 sm:py-12">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-100 text-green-600 mb-5 border border-green-200">
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Inquiry Submitted!</h3>
              <p className="text-sm sm:text-base text-foreground/80">Thank you for reaching out. We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
              {/* Row 1: Full Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1 sm:space-y-1.5">
                  <label htmlFor="fullName" className="block text-xs sm:text-sm font-medium text-foreground/90">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    className={`${inputBase} ${inputValid}`}
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-1 sm:space-y-1.5">
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground/90">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    onBlur={() => { setEmailTouched(true); setEmailError(validateEmail(email)); }}
                    className={`${inputBase} ${emailTouched && emailError ? inputError : inputValid}`}
                    placeholder="jane@example.com"
                  />
                  {emailTouched && emailError && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      {emailError}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Phone Number */}
              <div className="space-y-1 sm:space-y-1.5">
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-foreground/90">
                  Phone Number
                </label>
                <div className="flex" ref={dropdownRef}>
                  {/* Custom Country Selector */}
                  <div className="relative shrink-0">
                    <button
                      type="button"
                      onClick={() => { setIsCountryOpen(!isCountryOpen); setCountrySearch(''); }}
                      className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2.5 sm:py-3 rounded-l-lg border border-r-0 border-primary/40 bg-background hover:bg-primary/5 transition-colors h-full text-xs sm:text-sm"
                    >
                      <CountryFlag code={selectedCountry.code} />
                      <span className="font-medium text-foreground">{selectedCountry.dial}</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-primary transition-transform ${isCountryOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isCountryOpen && (
                      <div className="absolute z-50 top-full left-0 mt-1 w-64 sm:w-72 max-w-[calc(100vw-2.5rem)] bg-background border border-primary/30 rounded-lg shadow-xl overflow-hidden">
                        {/* Search */}
                        <div className="p-2 border-b border-border/40">
                          <input
                            type="text"
                            value={countrySearch}
                            onChange={(e) => setCountrySearch(e.target.value)}
                            placeholder="Search country..."
                            className="w-full px-3 py-1.5 text-xs sm:text-sm rounded-md border border-border outline-none focus:border-primary"
                            autoFocus
                          />
                        </div>
                        {/* Options */}
                        <div className="max-h-52 overflow-y-auto">
                          {filteredCountries.length === 0 ? (
                            <div className="px-4 py-3 text-xs sm:text-sm text-foreground/50 text-center">No country found</div>
                          ) : (
                            filteredCountries.map((c) => (
                              <button
                                key={c.code}
                                type="button"
                                onClick={() => {
                                  setCountryCode(c.code);
                                  setIsCountryOpen(false);
                                  setCountrySearch('');
                                }}
                                className={`w-full flex items-center gap-2.5 px-3.5 py-2 text-left text-xs sm:text-sm hover:bg-primary/5 transition-colors ${
                                  c.code === countryCode ? 'bg-primary/10 font-semibold' : ''
                                }`}
                              >
                                <CountryFlag code={c.code} />
                                <span className="flex-1 text-foreground truncate">{c.name}</span>
                                <span className="text-primary/70 text-xs">{c.dial}</span>
                                {c.code === countryCode && (
                                  <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                                )}
                              </button>
                            ))
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Phone Input */}
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    onBlur={() => { setPhoneTouched(true); setPhoneError(validatePhone(phone)); }}
                    className={`flex-1 min-w-0 px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-r-lg border outline-none transition-all duration-200 ${
                      phoneTouched && phoneError ? inputError : inputValid
                    }`}
                    placeholder={selectedCountry.example}
                    maxLength={selectedCountry.digits}
                    inputMode="numeric"
                  />
                </div>

                {phoneTouched && phoneError ? (
                  <p className="text-red-500 text-xs mt-1">
                    {phoneError}
                  </p>
                ) : phone ? (
                  <p className="text-foreground/50 text-xs mt-1">
                    {phone.length}/{selectedCountry.digits} digits
                    {phone.length === selectedCountry.digits && (
                      <span className="text-green-600 font-medium ml-1.5">✓ Complete</span>
                    )}
                  </p>
                ) : null}
              </div>

              {/* Row 3: Event Type + Event Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1 sm:space-y-1.5">
                  <label htmlFor="eventType" className="block text-xs sm:text-sm font-medium text-foreground/90">
                    Event Type <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="eventType"
                    required
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className={`${inputBase} ${inputValid} bg-background`}
                  >
                    <option value="">Select an event type</option>
                    <option value="birthday">Birthday</option>
                    <option value="wedding">Wedding</option>
                  </select>
                </div>
                <div className="space-y-1 sm:space-y-1.5">
                  <label htmlFor="eventDate" className="block text-xs sm:text-sm font-medium text-foreground/90">
                    Event Date <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    required
                    className={`${inputBase} ${inputValid}`}
                  />
                </div>
              </div>

              {/* Row 4: Special Requests */}
              <div className="space-y-1 sm:space-y-1.5">
                <label htmlFor="requests" className="block text-xs sm:text-sm font-medium text-foreground/90">
                  Special Requests
                </label>
                <textarea
                  id="requests"
                  rows={3}
                  className={`${inputBase} ${inputValid} resize-none`}
                  placeholder="Tell us about your theme, color preferences, or any specific ideas..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3.5 sm:py-4 text-sm sm:text-base font-semibold rounded-full text-primary-foreground bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-2 active:scale-95"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Inquiry'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

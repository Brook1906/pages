import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Check, Loader2 } from "lucide-react";

const WaitlistForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!name.trim()) {
      newErrors.name = 'Full name is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!businessType) {
      newErrors.businessType = 'Please select your business type';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Waitlist joining successful!",
        description: "You've been added to our exclusive waitlist. We'll be in touch soon!",
        duration: 5000,
      });
      
      // Reset form
      setName('');
      setEmail('');
      setCompany('');
      setBusinessType('');
      setMessage('');
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
        <Input
          id="name"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="company">Company Name</Label>
        <Input
          id="company"
          placeholder="Your Company Ltd."
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="businessType">Business Type <span className="text-red-500">*</span></Label>
        <Select value={businessType} onValueChange={setBusinessType}>
          <SelectTrigger className={errors.businessType ? "border-red-500" : ""}>
            <SelectValue placeholder="Select business type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="startup">Startup</SelectItem>
            <SelectItem value="small">Small Business</SelectItem>
            <SelectItem value="medium">Medium Business</SelectItem>
            <SelectItem value="freelancer">Freelancer</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.businessType && <p className="text-red-500 text-sm">{errors.businessType}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your accounting needs..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none h-24"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-accounting-dark hover:bg-accounting-primary text-white font-medium py-2.5"
        disabled={submitting}
      >
        {submitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          "Join Waitlist"
        )}
      </Button>
      
      <p className="text-center text-sm text-muted-foreground">
        Limited spots available. Join now to secure your place!
      </p>
    </form>
  );
};

export default WaitlistForm;

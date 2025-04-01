import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users } from 'lucide-react';

const SocialProof = () => {
  // Array of avatar images (would typically come from your actual users)
  const avatars = Array(5).fill(null).map((_, i) => ({
    src: `https://i.pravatar.cc/150?img=${i + 10}`,
    alt: `User ${i + 1}`,
    initials: String.fromCharCode(65 + i),
  }));

  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      <div className="flex -space-x-3">
        {avatars.map((avatar, index) => (
          <Avatar key={index} className="border-2 border-white h-8 w-8">
            <AvatarImage src={avatar.src} alt={avatar.alt} />
            <AvatarFallback>{avatar.initials}</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <div className="flex items-center text-sm font-medium">
        <Users className="mr-1 h-4 w-4 text-accounting-secondary" />
        <span>150+ business owners have already joined</span>
      </div>
    </div>
  );
};

export default SocialProof;

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button, buttonVariants } from '@/components/ui/button'; // Assuming Button is from Shadcn
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'; // Assuming Select components are from Shadcn

const TranscribeButton = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    console.log('Selected Language:', selectedLanguage);
    console.log('Selected File:', fileInputRef.current?.files?.[0]);
  };

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClick();
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button variant={buttonVariants.primary}>Transcribe File</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Transcribe File</DialogTitle>
            <form onSubmit={handleFormSubmit}>
              <Label htmlFor="language">Transcription Language</Label>
              <Select
                value={selectedLanguage}
                onChange={(value: string) => handleLanguageChange(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Language</SelectLabel>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Hindi">Hindi</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Label htmlFor="file">Upload your file</Label>
              <Input id="file" type="file" ref={fileInputRef} />
              <Button type="submit" variant={buttonVariants.primary}>
                Upload
              </Button>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TranscribeButton;

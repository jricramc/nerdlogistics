import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BookDemoModal({ open, onOpenChange }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to Discord webhook
      const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

      if (!webhookUrl) {
        console.error('Discord webhook URL not configured');
        alert('Error: Webhook not configured');
        setLoading(false);
        return;
      }

      const embed = {
        embeds: [
          {
            title: '📝 New Demo Request',
            color: 0x5865f2,
            fields: [
              { name: 'Name', value: formData.name || 'N/A', inline: true },
              {
                name: 'Company',
                value: formData.company || 'N/A',
                inline: true,
              },
              { name: 'Email', value: formData.email || 'N/A', inline: false },
              { name: 'Phone', value: formData.phone || 'N/A', inline: false },
              {
                name: 'Message',
                value: formData.message || 'N/A',
                inline: false,
              },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(embed),
      });

      if (response.ok) {
        // Reset form
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: '',
        });
        // Close modal
        onOpenChange(false);
        // Navigate to success page
        navigate('/sentform');
      } else {
        alert('Error sending request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[680px] max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-center font-serif text-4xl md:text-5xl font-normal mb-4">
            Book a call
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name and Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-normal text-gray-700"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-gray-50 border-gray-200 h-12"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="text-sm font-normal text-gray-700"
                >
                  Company name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  required
                  className="bg-gray-50 border-gray-200 h-12"
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-normal text-gray-700"
                >
                  Work email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Work email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-gray-50 border-gray-200 h-12"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-normal text-gray-700"
                >
                  Phone number <span className="text-red-500">*</span>
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="bg-gray-50 border-gray-200 h-12"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-normal text-gray-700"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Type your message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="bg-gray-50 border-gray-200 resize-none"
              />
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white h-12 text-base font-normal rounded-md"
              >
                {loading ? 'Submitting...' : 'Submit'}
              </Button>
            </div>
          </form>
      </DialogContent>
    </Dialog>
  );
}

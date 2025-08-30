"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
// import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <Card className="shadow-none border-none bg-transparent p-0">
          <CardContent className="p-0 space-y-3">
            {/* <Logo /> */}
            <p className="text-base text-gray-900">
              CareerKhoj is your all-in-one job and resume-builder platform.
              Explore top jobs, build standout resumes, and elevate your career
              — all in one place.
            </p>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card className="shadow-none border-none bg-transparent p-0">
          <CardContent className="p-0">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-base text-gray-900">
              <li>
                <Link href="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:underline">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:underline">
                  FAQs / Help
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Jobs By Area */}
        <Card className="shadow-none border-none bg-transparent p-0">
          <CardContent className="p-0">
            <h3 className="text-lg font-semibold mb-3">
              Jobs By Functional Area
            </h3>
            <ul className="space-y-2 text-base text-gray-900">
              <li>Website & Software</li>
              <li>Education & Training</li>
              <li>Graphic & UI/UX Design</li>
              <li>Other More....</li>
            </ul>
          </CardContent>
        </Card>

        {/* Location */}
        <Card className="shadow-none border-none bg-transparent p-0">
          <CardContent className="p-0">
            <h3 className="text-lg font-semibold mb-3">Our Location</h3>
            <p className="text-base mb-3">Kathmandu, Nepal</p>
          </CardContent>
        </Card>
      </div>

      <Separator className="bg-gray-500" />

      {/* Bottom Bar */}
      <div className="bg-gray-950 text-base text-gray-300 px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Social Links */}
        <div className="flex items-center space-x-3">
          <span>Connect With Us:</span>
          <Link href="#" className="text-white hover:text-blue-400 text-lg">
            <FaFacebook />
          </Link>
          <Link href="#" className="text-white hover:text-blue-300 text-lg">
            <FaLinkedin />
          </Link>
          <Link href="#" className="text-white hover:text-blue-300 text-lg">
            <FaTwitter />
          </Link>
          <Link href="#" className="text-white hover:text-pink-400 text-lg">
            <FaInstagram />
          </Link>
        </div>

        {/* Center: Copyright */}
        <p className="text-center flex-1 md:text-center">
          All rights reserved © {new Date().getFullYear()} Sajilo Digital
        </p>

        {/* Right: Download App */}
        <div className="flex items-center space-x-2">
          <span>Download App</span>
          <Link
            href="https://play.google.com/store/games?hl=en&pli=1"
            className="block"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Download App"
              width={100}
              height={30}
              className="h-6 w-auto"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

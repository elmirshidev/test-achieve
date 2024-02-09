"use client"
export default function getBaseUrl() {
    return typeof window !== "undefined" ? window.location.origin : "";
}
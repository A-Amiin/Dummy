import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	css: {
		modules: {
			scopeBehaviour: "local", // Default: 'local'
			generateScopedName: "[name][local]_[hash:base64:5]" // Custom class names
		}
	}
});

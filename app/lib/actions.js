import { signIn } from "@/auth";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { trackSynchronousRequestDataAccessInDev } from "next/dist/server/app-render/dynamic-rendering";

export async function authenticate(prevState, formData) {
    try {
        await signIn("credentials", formData);
    } catch (error) {
        switch(error.type) {
            case "CredentialsSignin":
                return 'Invalid username or password';
            default:
                return 'An error occurred';
        }
        throw error;
    }
}
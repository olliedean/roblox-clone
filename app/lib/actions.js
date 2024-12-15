import { signIn } from "@/auth";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { trackSynchronousRequestDataAccessInDev } from "next/dist/server/app-render/dynamic-rendering";

export async function authenticate(prevState, formData) {
    try {
        await signIn("credentials", formData);
    } catch (error) {
        console.error(error);
    }
}
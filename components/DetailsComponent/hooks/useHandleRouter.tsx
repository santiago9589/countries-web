import { useRouter } from "next/navigation";

export const useHandleRoute = ():[ (url: string) => void]=>{
    const router = useRouter();
    const handleRouter = (url: string) => {
        router.push(url)
    }

    return [handleRouter]
}
import type { Comedian } from "@prisma/client"

export const useComediansStore = () => {
    const comedians = useState<Comedian[]>('comedians', () => [])
    return comedians
}

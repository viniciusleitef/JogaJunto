import { ReactNode } from "react"
import { TeamCardIconsContainer } from "./styles"

interface TeamCardIconsProps{
    children: ReactNode
}

export function TeamCardIcons({children}:TeamCardIconsProps){
    return(
        <TeamCardIconsContainer>
            {children}
        </TeamCardIconsContainer>
    )
}
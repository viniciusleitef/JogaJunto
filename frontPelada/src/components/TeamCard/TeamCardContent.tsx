import { TeamCardContentContainer } from "./styles";

interface TeamCardContentProps{
    src: string,
    name:string,
    role:string
}

export function TeamCardContent({src, name, role}: TeamCardContentProps) {
  return (
    <TeamCardContentContainer>
      <img src={src} />
      <h3>{name}</h3>
      <p>{role}</p>
    </TeamCardContentContainer>
  );
}

import { CardAction } from "./styles";

interface FeatureCardActionProps{
    text: string;
    onAction: ()=> void;
}

export function FeatureCardAction({ text, onAction }:FeatureCardActionProps){
    return(
        <CardAction onClick={onAction}>
            {text}
        </CardAction>
    )
}
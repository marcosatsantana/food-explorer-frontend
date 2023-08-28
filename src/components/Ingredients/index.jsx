import { Container } from "./styles";

export function Ingredients({ ingredient }) {

    return (
        <Container>
            <div className="ingredients">
                <p>{ingredient}</p>
            </div>
        </Container>
    );
}
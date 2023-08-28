import styled from "styled-components";

export const Container = styled.div`
   
    img {
        display: flex;
        margin: auto;
        max-width: 6rem;
        max-height: 6rem;
        margin-bottom: 0.8rem;
    }

    p {
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 140%;
        text-align: center;
        background-color: ${({ theme }) => theme.COLORS.BLUE_300};
        padding: 10px;
        border-radius: 8px;
    }
`;
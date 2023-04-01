import styled from 'styled-components'

export const RecipeContainer = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`

export const RecipeButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

export const RecipeButton = styled.div`
  padding: 1rem;
  color: #313131;
  background: #fff;
  border: 2px solid #000;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`

export const RecipeInfo = styled.div`
  margin-left: 10rem;
  // display: flex;
  // align-items: flex-start;
  // justify-content: center;
`

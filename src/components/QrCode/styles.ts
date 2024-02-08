import styled from 'styled-components'

export const SectionContainer = styled.div`
  padding: 2em 0;
  display: flex;
  align-items: center;
  min-height: 100vh;
  margin-inline: auto;
  max-width: 75rem;
  width: 85%;

  img {
    max-width: 100%;
    display: block;
  }

  .input_group {
    display: flex;
    margin-top: 2em;
  }

  input {
    width: 100%;
    padding: 1em 0.75em;
    border: 1px solid #444343;
    border-radius: 3px;
    margin-bottom: 2em;
    margin-top: 0.75em;
  }

  button[type='submit'] {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      transition:
        background-color 0.2s,
        color 0.2s,
        border-color 0.2s;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 0;

    input {
      margin: 0;
      margin-bottom: 2em;
      margin-top: 0.75em;
      font-size: 1rem;
    }

    .qrcode_container {
      display: flex;
      align-items: center;
    }

    .input_group {
      margin-left: 3em;
    }
  }
`

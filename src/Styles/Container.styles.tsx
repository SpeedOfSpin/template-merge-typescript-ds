import styled from 'styled-components';

export const NonScrollableContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;

export const ScrollableContainer = styled.div`
  overflow-y: auto;
`;

export const FullHeightScrollableContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`;

// Container for a page containing a div.
export const GenericContainer = styled(NonScrollableContainer)`
  padding: 1rem 2rem;
`;

// Container for a page containing a table (and optionally filters and pagination components).
export const TableContainer = styled(NonScrollableContainer)`
  padding: 1rem 2rem;
`;

// Container for a page containing an account form (login, forgot password etc.)
export const AccountFormContainer = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: 1rem;

  > div {
    max-width: 20rem;
    min-width: 20rem;
  }
`;

// Container for an action bar
export const ActionsContainer = styled.div`
  display: flex;
  background-color: #fcfcfc;
  padding: 1rem 2rem;

  button {
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;

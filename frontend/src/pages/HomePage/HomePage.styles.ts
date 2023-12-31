import styled from "styled-components";

// TODO: totally create my own button component or find one I like to use
export const ArtGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-left: 1.25rem;
`;

export const ArtSection = styled.div`
  height: 100vh;
  padding-top: 4rem;
`;

export const ArtSectionHeader = styled.div`
  margin-bottom: 1.25rem;
  margin-left: 1.25rem;
`;

export const ArtSectionSubtitle = styled.p`
  font-size: 1rem;
  color: gray;
`;

export const ArtSectionTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.75rem;
`;

export const Container = styled.div`
  height: 100vh;
  background-color: #f0f8ff;
  margin: 0;
  padding: 0;
`;

export const Description = styled.p`
  padding-top: 0.75rem;
`;

export const Header = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
`;

export const PageLinkButton = styled.button`
  background-color: teal;
  color: white;
  padding: 0.625rem 1.25rem; // 10px 20px
  border-radius: 1.25rem; // 20px
  border: none;
  font-size: medium;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 4rem; // 64px

  &:hover {
    background-color: darkcyan;
  }
`;

export const PageSubtitle = styled.p`
  font-size: 1.5rem;
  color: #22d3ee;
  margin-left: 0.5rem;
`;

export const PageTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.75rem;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 12rem;
  height: 12rem;
  margin: 1rem 3rem;
`;

export const ProfileSection = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: auto;
  padding: 3rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const ProfileTitle = styled.h5`
  font-size: 1.5rem;
  color: slategray;
  border-bottom: 2px solid lightgray;
`;

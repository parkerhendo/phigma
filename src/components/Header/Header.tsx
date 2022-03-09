import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <StyledHeader>
            <HeaderSection justify='flex-start'>
                <ButtonGroup>
                    <HeaderButton selected>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.02466 9.8385L12.0247 2.8385L21.0247 9.8385V20.8385C21.0247 21.3689 20.8139 21.8776 20.4389 22.2527C20.0638 22.6278 19.5551 22.8385 19.0247 22.8385H5.02466C4.49423 22.8385 3.98552 22.6278 3.61044 22.2527C3.23537 21.8776 3.02466 21.3689 3.02466 20.8385V9.8385Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.02466 22.8385V12.8385H15.0247V22.8385" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </HeaderButton>
                    <HeaderButton>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7332 21.3757V19.3757C20.7332 18.3149 20.3117 17.2975 19.5616 16.5473C18.8114 15.7972 17.794 15.3757 16.7332 15.3757H8.73315C7.67229 15.3757 6.65487 15.7972 5.90473 16.5473C5.15458 17.2975 4.73315 18.3149 4.73315 19.3757V21.3757" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.7332 11.3757C14.9423 11.3757 16.7332 9.58487 16.7332 7.37573C16.7332 5.16659 14.9423 3.37573 12.7332 3.37573C10.524 3.37573 8.73315 5.16659 8.73315 7.37573C8.73315 9.58487 10.524 11.3757 12.7332 11.3757Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </HeaderButton>
                    <HeaderButton>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 7.37573H4C2.89543 7.37573 2 8.27116 2 9.37573V19.3757C2 20.4803 2.89543 21.3757 4 21.3757H20C21.1046 21.3757 22 20.4803 22 19.3757V9.37573C22 8.27116 21.1046 7.37573 20 7.37573Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16 21.3757V5.37573C16 4.8453 15.7893 4.33659 15.4142 3.96152C15.0391 3.58645 14.5304 3.37573 14 3.37573H10C9.46957 3.37573 8.96086 3.58645 8.58579 3.96152C8.21071 4.33659 8 4.8453 8 5.37573V21.3757" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </HeaderButton>
                </ButtonGroup>
            </HeaderSection>
            <HeaderSection justify='center'>
                <span style={{ color: "#AAAAAA", marginRight: 8 }}>Parker Henderson </span>
                <span style={{ color: 'white', marginRight: 8 }}>/</span>
                <span style={{ color: 'white' }}>Phigma</span>
            </HeaderSection>
            <HeaderSection>
                <ShareButton>Share</ShareButton>
            </HeaderSection>
        </StyledHeader>
    );
};

const HeaderSection = styled.div<{ justify?: "center" | "flex-start" | "flex-end" }>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify || 'flex-end'};
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const StyledHeader = styled.div`
    background-color: #2C2C2C;
    grid-row: 1;
    grid-column: 1 / 4;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderButton = styled.div<{ selected?: boolean }>`
    background-color: ${props => props.selected ? '#18A0FB' : 'transparent'};
    color: #fff;
    height: 52px;
    width: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ShareButton = styled.button`
    background-color: #18A0FB;
    border-radius: 6px;
    color: #fff;
    padding: 7px 12px;
    border: none;
    outline: none;
    margin-right: 24px; // TODO: fix this weird hack
    `;
    
export default Header;
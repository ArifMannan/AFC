import styled from "@emotion/styled"
import React from "react"
import { Typography } from "./Typography"
import { FaGithub } from "react-icons/fa"
import Link from "next/link"

const StyledButton = styled.a`
  padding: 5px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: inline-block;
  background-color: #fff;
  color: #484848;
  text-decoration: none;
`

const StyledSidebarFooter = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  color: white;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
  /* background: #0098e5; */
`

const StyledCollapsedSidebarFooter = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  color: white;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
  /* background: #0098e5; */
`


export const SidebarFooter = ({ children, collapsed, ...rest }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingBottom: "20px"
      }}
    >
      {collapsed ? (
        <StyledCollapsedSidebarFooter >
          <img
            alt="Logo"
            loading="lazy"
            width={40}
            height={56}
            decoding="async"
            data-nimg={1}
            style={{ backgroundColor: "white" }}
            className='project-logo'

            src="/static/images/logo-no-bg.png"
          />
        </StyledCollapsedSidebarFooter>
      ) : (
        <StyledSidebarFooter {...rest}>
          <div style={{ marginBottom: "12px" }}>
            <img
              alt="Logo"
              loading="lazy"
              width={40}
              height={56}
              decoding="async"
              data-nimg={1}
              style={{ backgroundColor: "white" }}
              className='project-logo'

              src="/static/images/logo-no-bg.png"
            />
          </div>
          <Typography fontWeight={600}>Futanta Club</Typography>
          <Typography
            variant="caption"
            style={{ letterSpacing: 1, opacity: 0.7 }}
          >

          </Typography>
          <div style={{ marginTop: "16px" }}>

            <StyledButton>
              <Typography
                variant="caption"
                color="#607489"
                fontWeight={600}
                onClick={() => router.push('/')}
                style={{ cursor: 'pointer' }}  // Make it look clickable
              >
                Go to Site
              </Typography>
            </StyledButton>
          </div>
        </StyledSidebarFooter>
      )}
    </div>
  )
}

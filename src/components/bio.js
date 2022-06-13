/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            mailAddress
            githubUrl
            linkedInUrl
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const { mailAddress, githubUrl, linkedInUrl } = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <div>
          <p>
            Written by <strong>{author.name}</strong>
            <a style={{ marginLeft : 10 }} href={'mailto:' + mailAddress}><AiOutlineMail aria-label="mail-icon" />Mail</a>
            <a style={{ marginLeft : 10 }} href={githubUrl}><FaGithub aria-label="github-icon" />GitHub</a>
            <a style={{ marginLeft : 10 }} href={linkedInUrl}><BsLinkedin aria-label="linkedin-icon" />LinkedIn</a>
          </p>
          <p>
            {author?.summary || null}
          </p>
        </div>
      )}
    </div>
  )
}

export default Bio

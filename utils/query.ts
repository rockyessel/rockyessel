import { Client } from '.';

export const NoteDetailsData = async (thought: string = '') => {
  const query = `
    *[_type=="thought" && slug.current =="${thought}"][0]{
    _createdAt,
    _id,
    _updatedAt,
    alt{
      current,
    },
    author->{
      bio,
      name,
      slug{
        current,
      }
    },
    body[]{
    ...,
    _type == "image" => {
    "image": asset->{
      url,
      metadata{
      dimensions{
        height,
          width,
      }
      }
      },
    },
    },
    caption,
    categories[]->{
      title,
      slug{
        current
      },
      description,
    },
    description,
    featured,
    keywords,
    "more_note":*[_type == "thought"][]{
        _id,
      "image": mainImage.asset->url,
       title,
       viewCount,
      featured,  
      description,
      "estimated_reading_time":round(length(pt::text(body)) / 5 / 130 ),
      recommended,
      slug{
      current,
      },
      "comment": *[_type == "comment" && thought._ref == ^._id][]{
        profile,
      name,
      comment,
      _createdAt,
      _id,
      },
    },
    "image":mainImage.asset->url,
    "estimated_reading_time": round(length(pt::text(body)) / 5 / 130 ),
    publishedAt,
    recommended,
    reference_post[]{
      name,
      url,
    },
    description,
    slug{
       current,
    },
    tags[]{
       title,
    },
      title,
      slug{
      current,
      },
      description,
    viewCount,
    "comment": *[_type == "comment" && thought._ref == ^._id][]{
      profile,
      name,
      comment,
      _createdAt,
      _id,
}
}
    `;

  const result = await Client.fetch(query, { thought });

  return result;
}

export const CommonPathProps = async (path: string = '') => {
  const query = `
  *[_type=="${path}"]{
    slug{
        current,
    }
}`;

  const result = await Client.fetch(query, { path });

  return result;
};

export const PortfolioData = async () => {
  const query = `*[_type == "portfolio"]{
    tags,
    type,
    _createdAt,
    _id,
    _type,
    _updatedAt,
    body[]{
    ...,
    _type == "image" => {
    "image": asset->{
      url,
      metadata{
      dimensions{
        height,
          width,
      }
      }
      },
    },
    },
    description,
    github_project_url,
    "image":image[].asset->url,
    live_website,
    slug,
    title,
    }
`;

  const result = await Client.fetch(query);

  return result;
};

export const NoteData = async () => {
  const query = `*[_type=="thought"]{
title,
viewCount,
_createdAt,
featured,  
"image":mainImage.asset->url,
description,
tags,
"estimated_reading_time":round(length(pt::text(body)) / 5 / 130 ),
recommended,
slug{
current,
},
"comment": *[_type == "comment" && thought._ref == ^._id][]{_id},
}
`;

  const result = await Client.fetch(query);

  return result;
};

export const ProjectDataProps = async (project: string = '') => {
  const query = `*[_type == "portfolio" && slug.current == "${project}"][0]{
  tags,
  type,
  _createdAt,
  _id,
  _type,
  _updatedAt,
 body[]{
    ...,
    _type == "image" => {
    "image": asset->{
      url,
      metadata{
      dimensions{
        height,
          width,
      }
      }
      },
    },
    },
  description,
  github_project_url,
  "image": image[].asset->url,
  live_website,
  slug,
  title,
}
`;

  const result = await Client.fetch(query, { project });

  return result;
};

export const UpdateDatedViewCount = async (thought: string = '') => {
  const query = `*[_type == "thought" && slug.current == "${thought}"][0]{
    _id,
    viewCount,
    publishedAt,
    "comment": *[_type == "comment" && thought._ref == ^._id][]{
      _id,
      },
  }`;

  const result = await Client.fetch(query, { thought });

  return result;
};

export const ResumeQuery = async () => {
  const query = `*[_type=="resume"]{
  _createdAt,
  description,
  _updatedAt,
  title,
  body,
}`;

  const result = await Client.fetch(query);

  return result;
};

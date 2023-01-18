import { Client } from '.';

export const ProjectDetailsData = async (note: string = '') => {
  const query = `
    *[_type=="note" && slug.current =="${note}"][0]{
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
    body,
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
    "more_note":*[_type == "note"][]{
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
      "comment": *[_type == "comment" && note._ref == ^._id][]{
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
    "comment": *[_type == "comment" && note._ref == ^._id][]{
      name,
      comment,
      _createdAt,
      _id,
}
}
    `;

  const result = await Client.fetch(query, { note });

  return result;
};

export const ProjectDetailsDataPath = async () => {
  const query = `
  *[_type=="note"]{
    slug{
        current,
    }
}`;

  const result = await Client.fetch(query);

  return result;
};

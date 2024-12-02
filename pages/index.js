import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'posts', 'hello-world.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    props: {
      data,
      content,
    },
  };
}

export default function Home({ data, content }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

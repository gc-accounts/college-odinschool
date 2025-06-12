// src/utils/getCourseHighlight.ts

export interface Tool {
  path?: string;
  name?: string;
  description?: string
}

export interface getDataByPageProps {
  id?: number;
  title?: string;
  path?: string;
  highlight?: string[];
  sub_title?: string;
  points?: string[],
  certificate_img?: string[],
  tools?: Tool[];
}

export function getDataByPage(
  highlights: getDataByPageProps[],
  currentPath: string
): getDataByPageProps | undefined {
  return highlights?.find(course => `${course.path}` === currentPath);
}

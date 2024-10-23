import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
/** 简化版的类名合并函数，解决动态拼接类名和Tailwind 冲突处理 */
export default (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

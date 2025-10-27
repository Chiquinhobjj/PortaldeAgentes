declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react';
  
  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
  }
  
  export const Search: ComponentType<LucideProps>;
  export const Filter: ComponentType<LucideProps>;
  export const Video: ComponentType<LucideProps>;
  export const FileText: ComponentType<LucideProps>;
  export const Database: ComponentType<LucideProps>;
  export const Book: ComponentType<LucideProps>;
  export const ExternalLink: ComponentType<LucideProps>;
  export const Play: ComponentType<LucideProps>;
  export const Square: ComponentType<LucideProps>;
  export const BarChart3: ComponentType<LucideProps>;
  export const Zap: ComponentType<LucideProps>;
  export const Home: ComponentType<LucideProps>;
  export const Grid3X3: ComponentType<LucideProps>;
  export const Star: ComponentType<LucideProps>;
  export const Activity: ComponentType<LucideProps>;
}

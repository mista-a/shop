export class SearchProductDto {
  name?: string;
  price?: number;
  colors?: string[];
  sizes?: string[];
  type?: string;
  limit?: number;
  take?: number;
  views: 'DESC' | 'ASC';
}

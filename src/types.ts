export interface Service {
  title: string;
  abstract: string;
  keywords: string[];
}

export type GeoPoint = { lon: number; lat: number };

export type DefaultTileMatrixSetName =
  | "WebMercatorQuad"
  | "WorldCRS84Quad"
  | "CGCS2000Quad";

/**
 * TileMatrix 结构定义
 */
export interface TileMatrix {
  identifier: string;
  scale_denominator: number;
  top_left_corner: [number, number];
  tile_width: number;
  tile_height: number;
  matrix_width: number;
  matrix_height: number;
}

export interface TileMatrixSet {
  title: string;
  id: string;
  supported_crs: string;
  wellknown_scale_set: string;
  tile_matrixs: TileMatrix[];
}

// export interface Layer {
//   title: string;
//   abstract: string;
//   id: string;
//   bbox: [GeoPoint, GeoPoint];
//   tile_matrix_set: DefaultTileMatrixSetName;
//   wmts_url: string;
// }

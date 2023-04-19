import Coordinate from '@/types/entity/coordinate';

export default interface AppDataInterface {
  name: string;
  favicon?: string;
  minimize: boolean;
  position: Coordinate;
}

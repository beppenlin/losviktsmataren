/**
 * Created by beppe on 2017-06-09.
 */
export class AllData {
  id: number;
  store: string;
  store_city: string;
  store_name: string;
  freezer: Freezer[];
}

export class Freezer {
  berries_sensorID: string;
  berries_type: string;
  berries_weight: string;
}

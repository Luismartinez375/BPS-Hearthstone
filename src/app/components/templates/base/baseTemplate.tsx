export interface IBaseTemplate {
  sampleTextProp: string;
}

export default function BaseTemplate({ sampleTextProp }: IBaseTemplate) {
  return <div className="">{sampleTextProp}</div>;
}

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { getImageUrl } from "../../helpers/getImageUrl";
import {
  brandBicycles,
  categoryBicycles,
  colorBicycles,
  materialBicycles,
  sizeBicycles,
} from "../../constants";
import { InputString } from "./InputString";
import { InputOption } from "./InputOption";
import { InputTextarea } from "./InputTextarea";
import { InputCheckbox } from "./InputCheckbox";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchPostBicycle } from "../../redux/thunks";

interface FormAddBicycleProps {}

const FormAddBicycle: React.FunctionComponent<FormAddBicycleProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>({
    mode: "onBlur",
    defaultValues: { category: "" },
  });

  const dispatch = useAppDispatch();
  const isLoaded = useAppSelector((state) => state.bicycles.bicycles.isLoaded);
  const errorMessage = useAppSelector((state) => state.bicycles.bicycles.error);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await setShowMessageStatus(true);

    const {
      fullName,
      category,
      manufacturer,
      article,
      image,
      price,
      priceSale,
      description,
      year,
      diameter,
      material,
      tires,
      frame,
      saddle,
      seatpost,
      fork,
      chain,
      brake,
      speed,
      garantine,
    } = data;

    let arraySize: string[] = [];
    let arrayColor: string[] = [];
    for (const key in toggleSize) {
      //@ts-ignore
      if (toggleSize[key]) {
        arraySize.push(key);
      }
    }
    for (const key in toggleColors) {
      //@ts-ignore
      if (toggleColors[key]) {
        arrayColor.push(key);
      }
    }

    await dispatch(
      fetchPostBicycle({
        fullName,
        category,
        novelty: toggleNovelty,
        manufacturer,
        article,
        image,
        availability: toggleAvailability,
        price: +price,
        priceSale: priceSale ? +priceSale : +price,
        size: arraySize,
        color: arrayColor,
        description,
        year: +year,
        diameter,
        material,
        tires,
        frame,
        saddle,
        seatpost,
        fork,
        chain,
        brake,
        speed: +speed,
        garantine: +garantine,
      })
    );
  };

  const [toggleNovelty, setToggleNovelty] = React.useState(false);
  const [toggleAvailability, setToggleAvailability] = React.useState(true);
  const [toggleSize, setToggelSize] = React.useState<SizeBicycleType>({
    XXS: false,
    XS: false,
    S: false,
    M: false,
    L: false,
    XL: false,
    XXL: false,
  });
  const [toggleColors, setToggelColors] = React.useState<ColorBicycleType>({
    black: false,
    red: false,
    yellow: false,
    orange: false,
    blue: false,
    green: false,
    pink: false,
    gray: false,
    white: false,
    beige: false,
    brown: false,
    olive: false,
    violet: false,
  });
  const [showMessageStatus, setShowMessageStatus] =
    React.useState<boolean>(false);
  let [countColors, setCountColors] = React.useState(0);

  const handleToggleNovelty = () => {
    setToggleNovelty(() => !toggleNovelty);
  };
  const handleToggleAvailability = () => {
    setToggleAvailability(() => !toggleAvailability);
  };

  const handleToggleSize = (size: string) => {
    setToggelSize((sizes: any) => {
      return { ...sizes, [size]: !sizes[size] };
    });
  };

  const handleToggleColor = (color: string) => {
    setToggelColors((colors: any) => {
      if (colors[color]) {
        setCountColors(() => countColors - 1);
      } else {
        setCountColors(() => countColors + 1);
      }
      return { ...colors, [color]: !colors[color] };
    });
  };

  return (
    <form className="form-add-bicycle" onSubmit={handleSubmit(onSubmit)}>
      <h4 className="form-add-bicycle__subtitle">Describe in detail:</h4>
      <InputString
        register={register}
        registerKey={"fullName"}
        errors={errors}
        errorMessage="The title plays an important role, don't forget to include it"
        errorMessageMinLength="The title must be more than 3 characters."
        valueMinLength={3}
        label="Full name*"
        typeInput="text"
        placeholder="For example, Specialized Turbo Levo Comp Alloy 2022 - Electric Mountain Bike"
      />

      <InputCheckbox
        label="Bicycle availability"
        toggleState={toggleAvailability}
        handleChangeFunction={handleToggleAvailability}
      />

      <InputOption
        listElements={categoryBicycles}
        register={register}
        registerKey={"category"}
        errors={errors}
        errorMessage="Required field"
        label="Category*"
      />

      <h4 className="form-add-bicycle__subtitle">Photos:</h4>
      <InputTextarea
        register={register}
        registerKey={"image"}
        errors={errors}
        errorMessage="Required field"
        errorMessageMinLength="minimum 3 characters"
        valueMinLength={4}
        label="Write the names of the photos separated by commas, the names must match
        the photos on the server. The first line string before the comma is the
        title photo"
        placeholder="Specialized-Turbo-Levo-Comp-Alloy-2022-Electric-Mountain-Bike-black.jpg,Specialized-Turbo-Levo-Comp-Alloy-2022-Electric-Mountain-Bike-blue.jpg..."
      />
      <InputTextarea
        register={register}
        registerKey={"description"}
        errors={errors}
        errorMessage="Required field"
        errorMessageMinLength="Description must be at least 40 characters"
        valueMinLength={40}
        label="Description*"
        placeholder="Write a description of the bike..."
      />

      <InputCheckbox
        label="Bicycle novelty"
        toggleState={toggleNovelty}
        handleChangeFunction={handleToggleNovelty}
      />

      <InputOption
        listElements={brandBicycles}
        register={register}
        registerKey={"manufacturer"}
        errors={errors}
        errorMessage="Required field"
        label="Manufacturer*"
      />

      <InputString
        register={register}
        registerKey={"article"}
        errors={errors}
        errorMessage="Required field"
        errorMessageMinLength="The article must be more than 3 characters."
        valueMinLength={3}
        label="Article*"
        typeInput="text"
        placeholder="For example, 245838"
      />

      <InputString
        register={register}
        registerKey={"price"}
        errors={errors}
        errorMessage="Required field"
        errorMessageMin="The price must be more than 99"
        valueMin={99}
        label="Price*"
        typeInput="number"
        placeholder="For example, 3499"
      />

      <InputString
        register={register}
        registerKey={"priceSale"}
        errors={errors}
        optionalField
        label="Price sale"
        typeInput="number"
        placeholder="For example, 3000"
      />

      <div className="form-add-bicycle__select-multiple-options">
        <label className="form-add-bicycle__input-title">Size*</label>
        <div className="select-multiple-options">
          <ul>
            {sizeBicycles.map((size: any) => (
              <li
                key={size}
                //@ts-ignore
                className={toggleSize[size] ? size : ""} // solve the error TypeScript ???
                onClick={() => handleToggleSize(size)}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <h6 className="message-error">Select size</h6>
      </div>

      <div className="form-add-bicycle__colors-block">
        <label className="form-add-bicycle__input-title">
          Colors*: {countColors}/{colorBicycles.length}
        </label>
        <div className="colors-block">
          <ul>
            {colorBicycles.map((color) => (
              <li
                key={color}
                style={
                  toggleColors[color]
                    ? {
                        backgroundColor: `${color}`,
                        color: `${
                          color === "black" || color === "blue"
                            ? "white"
                            : "black"
                        } `,
                        border: `${
                          color === "white" || color === "beige"
                            ? "2px solid #B3B3B3"
                            : ""
                        }`,
                      }
                    : {}
                }
                onClick={() => handleToggleColor(color)}
              >
                {color}
              </li>
            ))}
          </ul>
        </div>
        <h6 className="message-error">Select color</h6>

        <InputString
          register={register}
          registerKey={"year"}
          errors={errors}
          errorMessage="Required field"
          errorMessageMin="enter four values"
          errorMessageMax="enter four values"
          valueMin={1000}
          valueMax={9999}
          label="Year*"
          typeInput="number"
          placeholder="For example, 2023"
        />

        <InputString
          register={register}
          registerKey={"diameter"}
          errors={errors}
          errorMessage="Required field"
          errorMessageMin="min 1"
          errorMessageMax="max 33"
          valueMin={1}
          valueMax={33}
          label="Diameter tires*"
          typeInput="number"
          placeholder="For example, 28"
        />

        <InputString
          register={register}
          registerKey={"tires"}
          optionalField
          label="Tires"
          typeInput="string"
          placeholder="For example, 28"
        />

        <InputOption
          listElements={materialBicycles}
          register={register}
          registerKey={"material"}
          errors={errors}
          errorMessage="Required field"
          label="Material bike*"
        />

        <InputTextarea
          register={register}
          registerKey={"frame"}
          errors={errors}
          errorMessage="Required field"
          errorMessageMinLength="Frame must be at least 40 characters"
          valueMinLength={40}
          label="Frame*"
          placeholder="For example, Specialized m5 premium alloy, headset adjust, bb height adjust, s-sizing, internal cable routing, 150mm travel, 148mm spacing..."
        />

        <InputString
          register={register}
          registerKey={"saddle"}
          optionalField
          label="Saddle"
          typeInput="text"
          placeholder="For example, Cbridge comp, hollow cr-mo rails, 155/143mm"
        />

        <InputTextarea
          register={register}
          registerKey={"seatpost"}
          optionalField
          label="Seatpost"
          placeholder="For example, X-fusion manic, infinite adjustable, two-bolt head, bottom mount cable routing, remote slr le lever, 34.9, s1: 100mm, s2: 125mm, s3: 150mm, s4/s5: 175mm, s6: 190mm"
        />
        <InputTextarea
          register={register}
          registerKey={"fork"}
          optionalField
          label="Fork"
          placeholder="For example, Gt pro design, 100% cr-mo 2pc. steerer, tapered legs, 3/8 axle dropouts"
        />

        <InputString
          register={register}
          registerKey={"chain"}
          optionalField
          label="Chain"
          typeInput="text"
          placeholder="For example, Kmc z7, 7-speed"
        />
        <InputString
          register={register}
          registerKey={"brake"}
          optionalField
          label="Brake"
          typeInput="text"
          placeholder="For example, Promax mech disc, 160mm rotors"
        />
        <InputString
          register={register}
          registerKey={"speed"}
          optionalField
          label="Speed"
          typeInput="number"
          placeholder="For example, 16"
        />
        <InputString
          register={register}
          registerKey={"garantine"}
          optionalField
          label="Garantine (month)"
          typeInput="number"
          placeholder="For example, 24"
        />
      </div>

      {showMessageStatus &&
        (errorMessage ? (
          <p style={{ color: "red" }}>{errorMessage}</p>
        ) : isLoaded ? (
          <p style={{ color: "green" }}> succes!</p>
        ) : (
          <p>loading...</p>
        ))}

      <button className="standart-btn" onClick={() => onSubmit}>
        ADD
      </button>
    </form>
  );
};

export default FormAddBicycle;

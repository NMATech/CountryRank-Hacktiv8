import Select from "react-select";
import { motion } from "framer-motion";

const SelectForm = ({ countries, selectedOption, handleChange, direction }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.3 }}
      viewport={{ once: true }}
    >
      <Select
        options={countries} // option select
        value={selectedOption} // option selected
        onChange={handleChange} // handle ketika diselect
        placeholder="Select a country..."
        isSearchable={true} //
        className="text-black"
        styles={{
          control: (base) => ({
            ...base,
            borderColor: "#0d9488", //
            boxShadow: "none", //
            "&:hover": { borderColor: "#0d9488" },
          }),
        }}
      />
    </motion.div>
  );
};

export default SelectForm;

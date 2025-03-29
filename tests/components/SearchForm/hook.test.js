import { renderHook, act } from "@testing-library/react"
import { useForm } from "../../../src/components/SearchForm/hook";

const keyword = "superman"
const setup = (params) => renderHook(() => useForm(params)); 
test("should update keyword", () => {
   const {result} = setup();

   act(()=> {
    //permite simular como se comparta el browser
       result.current.updateKeyword(keyword);
   })
   expect(result.current.keyword).toBe(keyword)
});

test("should use initial values", ()=> {
    const { result } = renderHook(() => useForm("matrix", "r"));

    expect(result.current.keyword).toBe("matrix");
    expect(result.current.raiting).toBe("r");
});


test("should update raiting when used twice", () => {
   const { result } = renderHook(() => useForm());

   act(()=> {
    //permite simular como se comparta el browser
       result.current.updateKeyword("b");
       result.current.updateKeyword("ba")
   });

   expect(result.current.keyword).toBe("ba")
   expect(result.current.keyword).not.toBe(keyword)
   expect(result.current.times).toBe(2);
});
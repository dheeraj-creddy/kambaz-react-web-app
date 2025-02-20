import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes.tsx";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse.tsx";
import {TernaryOperator} from "./TernaryOperator.tsx";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse.tsx";
import ConditionalOutputInline from "./ConditionalOutputInline.tsx";
import LegacyFunctions from "./LegacyFunctions.tsx";
import ArrowFunctions from "./ArrowFunctions.tsx";
import ImpliedReturn from "./ImpliedReturn.tsx";
import TemplateLiterals from "./TemplateLiterals.tsx";
import SimpleArrays from "./SimpleArrays.tsx";
import ArrayIndexAndLength from "./ArrayIndexAndLength.tsx";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays.tsx";
import ForLoops from "./ForLoops.tsx";
import MapFunction from "./MapFunction.tsx";
import FindFunction from "./FindFunction.tsx";
import FindIndex from "./FindIndex.tsx";
import FilterFunction from "./FilterFunction.tsx";
import JsonStringify from "./JsonStringify.tsx";
import House from "./House.tsx";
import TodoItem from "./TodoItem.tsx";
import TodoList from "./TodoList.tsx";
import Spreading from "./Spreading.tsx";
import Destructing from "./Destructing.tsx";
import FunctionDestructing from "./FunctionDestructing.tsx";
import DestructingImports from "./DestructingImports.tsx";
import Classes from "./Classes.tsx";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import PathParameters from "./PathParameters";
import AddPathParameters from "./AddPathParameters";

export default function Lab3() {
    return (
        <div id="wd-lab3">
                <h3>Lab 3</h3>
                <VariablesAndConstants/>
                <VariableTypes/>
                <BooleanVariables/>
                <IfElse/>
                <TernaryOperator/>
                <ConditionalOutputIfElse/>
                <ConditionalOutputInline/>
                <LegacyFunctions/>
                <ArrowFunctions/>
                <ImpliedReturn/>
                <TemplateLiterals/>
                <SimpleArrays/>
                <ArrayIndexAndLength/>
                <AddingAndRemovingToFromArrays/>
                <ForLoops/>
                <MapFunction/>
                <FindFunction/>
                <FindIndex/>
                <FilterFunction/>
                <JsonStringify/>
                <House/>
                <TodoItem/>
                <hr/>
                <TodoList/>
                <Spreading/>
                <Destructing/>
                <FunctionDestructing/>
                <DestructingImports />
                <Classes />
                <Add a={3} b={4} />
                <h4>Square of 4</h4>
                <Square>4</Square>
                <hr />
                <h4> Highlight </h4>
                <Highlight>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                    vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
                </Highlight>
                <hr/>
                <PathParameters />
        </div>
    );
}




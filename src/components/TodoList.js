import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList(){
    return (
        <TodoListBlock>
            <TodoItem text="프로젝트 생성" done={true}/>
            <TodoItem text="컴포넌트 스타일링" done={true}/>
            <TodoItem text="Contexthttp://localhost:3000/만들기" done={false}/>
            <TodoItem text="기능구현" done={false}/>
        </TodoListBlock>
    );

}

export default TodoList ;
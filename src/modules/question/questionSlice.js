import { createSlice } from '@reduxjs/toolkit';
export const TYPE_MULTI_CHOICE = 'MULTI_CHOICE';
export const TYPE_CHECK_BOX = 'CHECK_BOX';
export const TYPE_TEXT = 'TEXT';

const initial_question = {
    type: TYPE_MULTI_CHOICE,
    title: '',
    detail: '',
    examples: [
        {
            id: 0,
            checked: false,
            content: '',
        },
    ],
    text: '',
};
let question_id = 0;

export const questionSlice = createSlice({
    name: 'question',
    initialState: {
        form_title: '',
        form_detail: '',
        questions: [{ id: question_id++, ...initial_question }],
    },
    reducers: {
        change_filed: (state, { payload: { key, value } }) => {
            state[key] = value;
        },
        change_question_filed: (state, { payload: { key, value, id } }) => {
            // const idx = state.questions.findIndex(
            //     (question) => question.id === id,
            // );
            // state.questions[idx] = {
            //     ...state.questions[idx],
            //     [key]: value,
            // };
            state.questions = state.questions.map((question) =>
                question.id === id ? { ...question, [key]: value } : question,
            );
        },
        change_question_type: (state, { payload: { type, id } }) => {
            state.questions = state.questions.map((question) =>
                question.id === id
                    ? {
                          ...question,
                          type,
                          examples: question.examples.map((example) => ({
                              ...example,
                              checked: false,
                          })),
                      }
                    : question,
            );
        },
        change_example_content: (
            state,
            { payload: { question_id, example_id, content } },
        ) => {
            state.questions = state.questions.map((question) =>
                question.id === question_id
                    ? {
                          ...question,
                          examples: question.examples.map((example) =>
                              example.id === example_id
                                  ? { ...example, content }
                                  : example,
                          ),
                      }
                    : question,
            );
        },
        change_example_checked: (
            state,
            { payload: { question_id, example_id } },
        ) => {
            state.questions = state.questions.map((question) =>
                question.id === question_id
                    ? {
                          ...question,
                          examples: question.examples.map((example) =>
                              example.id === example_id
                                  ? {
                                        ...example,
                                        checked:
                                            question.type === TYPE_MULTI_CHOICE
                                                ? true
                                                : !example.checked,
                                    }
                                  : {
                                        ...example,
                                        checked:
                                            question.type === TYPE_MULTI_CHOICE
                                                ? false
                                                : example.checked,
                                    },
                          ),
                      }
                    : question,
            );
        },
        change_example_text: (state, { payload: { id, text } }) => {
            state.questions = state.questions.map((question) =>
                question.id === id ? { ...question, text } : question,
            );
        },
        add_question: (state) => {
            state.questions = state.questions.concat({
                id: question_id++,
                ...initial_question,
            });
        },
        add_example: (state, { payload: { id } }) => {
            state.questions = state.questions.map((question) =>
                question.id === id
                    ? {
                          ...question,
                          examples: question.examples.concat({
                              id:
                                  question.examples[
                                      question.examples.length - 1
                                  ]?.id + 1 || 0,
                              checked: false,
                              content: '',
                          }),
                      }
                    : question,
            );
        },
        remove_question: (state, { payload: { id } }) => {
            state.questions = state.questions.filter(
                (question) => question.id !== id,
            );
        },
        remove_example: (state, { payload: { question_id, example_id } }) => {
            state.questions = state.questions.map((question) =>
                question.id === question_id
                    ? {
                          ...question,
                          examples: question.examples.filter(
                              (example) => example.id !== example_id,
                          ),
                      }
                    : question,
            );
        },

        // submit
        submit_question: (state) => {
            const { form_title, form_detail, questions } = state;
            if (!form_title || !form_detail || questions.length === 0) {
                console.log(
                    'form title, form_detail, questions을 입력해주세요.',
                );
                return;
            }
            console.log('form_title : ', form_title);
            console.log('form_detail : ', form_detail);
            questions.map((question, idx) => {
                console.group(`question ${idx + 1} `);
                console.log(`title : ${question.title}`);
                console.log(`detail : ${question.detail}`);
                console.group(`example`);
                question.type === TYPE_TEXT
                    ? console.log(question.text)
                    : question.examples.map((example, idx) => {
                          console.log(
                              `${example.checked ? '∨' : '  '} ${idx + 1}. ${
                                  example.content
                              }`,
                          );
                      });
                console.groupEnd();
                console.groupEnd();
            });
        },
    },
});

export const {
    change_filed,
    change_question_filed,
    change_question_type,
    change_example_content,
    change_example_checked,
    change_example_text,
    add_question,
    add_example,
    remove_question,
    remove_example,
    submit_question,
} = questionSlice.actions;

export default questionSlice.reducer;

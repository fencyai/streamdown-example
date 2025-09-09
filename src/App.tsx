import { useChatCompletions } from '@fencyai/react'
import { Response } from './components/ai-elements/response'

function App() {
    const {
        latest: { streaming },
        createStreamingChatCompletion,
    } = useChatCompletions()

    return (
        <div className="w-screen h-screen flex flex-col p-10">
            <div>
                <button
                    onClick={() => {
                        createStreamingChatCompletion({
                            openai: {
                                model: 'gpt-4o-mini',
                                messages: [
                                    {
                                        role: 'user',
                                        content:
                                            'Show me some react code and 1 example of how to use it.',
                                    },
                                ],
                            },
                        })
                    }}
                    className="px-4 py-2 rounded-lg"
                >
                    {streaming?.loading
                        ? 'Streaming...'
                        : 'Create Chat Completion'}
                </button>
            </div>

            <div className="mt-10">
                {streaming?.loading && <div>Streaming...</div>}
                {streaming?.response && (
                    <Response>{streaming.response}</Response>
                )}
            </div>
        </div>
    )
}

export default App

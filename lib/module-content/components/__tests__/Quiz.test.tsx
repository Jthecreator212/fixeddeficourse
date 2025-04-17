import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Quiz } from '../Quiz'
import { QuizQuestion } from '@/lib/types/module'

const mockQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: 'What is DeFi?',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    correctIndex: 0,
    explanation: 'DeFi stands for Decentralized Finance',
    difficulty: 'easy'
  },
  {
    id: '2',
    question: 'What is a smart contract?',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    correctIndex: 1,
    explanation: 'A smart contract is a self-executing contract',
    difficulty: 'medium'
  }
]

describe('Quiz Component', () => {
  it('renders quiz questions', () => {
    render(<Quiz questions={mockQuestions} />)
    
    expect(screen.getByText('What is DeFi?')).toBeInTheDocument()
    expect(screen.getByText('What is a smart contract?')).toBeInTheDocument()
  })

  it('allows selecting answers', () => {
    render(<Quiz questions={mockQuestions} />)
    
    const radioButtons = screen.getAllByRole('radio')
    fireEvent.click(radioButtons[0])
    
    expect(radioButtons[0]).toBeChecked()
  })

  it('shows error when submitting without answering all questions', async () => {
    render(<Quiz questions={mockQuestions} />)
    
    const submitButton = screen.getByText('Check Answers')
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Please answer all questions before submitting.')).toBeInTheDocument()
    })
  })

  it('shows results after submitting all answers', async () => {
    render(<Quiz questions={mockQuestions} />)
    
    // Select answers
    const radioButtons = screen.getAllByRole('radio')
    fireEvent.click(radioButtons[0]) // First question
    fireEvent.click(radioButtons[4]) // Second question
    
    const submitButton = screen.getByText('Check Answers')
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Your Score:')).toBeInTheDocument()
      expect(screen.getByText('Correct!')).toBeInTheDocument()
      expect(screen.getByText('Incorrect')).toBeInTheDocument()
    })
  })

  it('calls onComplete callback with score', async () => {
    const onComplete = vi.fn()
    render(<Quiz questions={mockQuestions} onComplete={onComplete} />)
    
    // Select answers
    const radioButtons = screen.getAllByRole('radio')
    fireEvent.click(radioButtons[0]) // First question
    fireEvent.click(radioButtons[4]) // Second question
    
    const submitButton = screen.getByText('Check Answers')
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(onComplete).toHaveBeenCalledWith(1) // One correct answer
    })
  })

  it('disables radio buttons after showing results', async () => {
    render(<Quiz questions={mockQuestions} />)
    
    // Select answers and submit
    const radioButtons = screen.getAllByRole('radio')
    fireEvent.click(radioButtons[0])
    fireEvent.click(radioButtons[4])
    fireEvent.click(screen.getByText('Check Answers'))
    
    await waitFor(() => {
      radioButtons.forEach(button => {
        expect(button).toBeDisabled()
      })
    })
  })
}) 